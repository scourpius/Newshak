package newshak.util;

public class RegisterData {
	public String name, username, password, university, email;
	public boolean isStudent;
	
	public RegisterData() {}
	
	public RegisterData(String name, String username, String password, String university, String email, boolean isStudent) {
		this.name = name;
		this.username = username;
		this.password = password;
		this.university = university;
		this.isStudent = isStudent;
		this.email = email;
	}
}
