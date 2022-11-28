package newshak.filters;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

/**
 * For circumventing a security measure on most browsers that messes with REST
 * It adds 3 optional headers to every HTTP reply
 *
 */
@Provider
public class AdditionalResponseHeadersFilter implements ContainerResponseFilter {
	
	public AdditionalResponseHeadersFilter() {
	}

	@Override
	public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext)
			throws IOException {
		responseContext.getHeaders().add("Access-Control-Allow-Methods", "HEAD,GET,PUT,POST,DELETE,OPTIONS");
		responseContext.getHeaders().add("Access-Control-Allow-Origin", "*");
		responseContext.getHeaders().add("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
	}
}








