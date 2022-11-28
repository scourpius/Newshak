package newshak.resources;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.Status;

import newshak.util.LoginData;
import newshak.util.RegisterData;

import com.google.cloud.datastore.*;

@Path("/user")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class UserResources {
	private final Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
	
	//User information
	private static final String NAME = "Nome";
	private static final String PASSWORD = "Password";
	private static final String EMAIL = "Email";
	private static final String ROLE = "Role";
	private static final String UNIVERSITY = "University";

	//Keys
	private static final String USER = "User";
	
	public UserResources() {}

	@POST
	@Path("/register")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registerUser(RegisterData data) {
		Transaction tn = datastore.newTransaction();

        Key userKey = datastore.newKeyFactory().setKind(USER).newKey(data.username);

		try {
			Entity user = tn.get(userKey);
            
			//Check if user already exists
			if (user != null) {
				return Response.status(Status.CONFLICT).build();
			}
			
			//Create User and Code entity
			user = Entity.newBuilder(userKey)
				.set(NAME, data.name)
				.set(PASSWORD, data.password)
				.set(EMAIL, data.email)
				.set(ROLE, data.isStudent ? "Student" : "Teacher")
				.set(UNIVERSITY, data.university)
				.build();

			tn.add(user);

			tn.commit();
			return Response.ok().build();
		} finally {
			if (tn.isActive())
				tn.rollback();
		}
	}
	
	@POST
	@Path("/login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
	public Response doLogin(LoginData data) {	
		Key userKey = datastore.newKeyFactory().setKind(USER).newKey(data.username);

		Entity user = datastore.get(userKey);
			
		if (user == null)
			return Response.status(Status.NOT_FOUND).build();
		
		String pwd = user.getString(PASSWORD);

		if(!pwd.equals(data.password))
			return Response.status(Status.FORBIDDEN).build();
				
		return Response.ok().build();
	}

}
