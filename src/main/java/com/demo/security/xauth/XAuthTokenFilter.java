package com.demo.security.xauth;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * Filters incoming requests and installs a Spring Security principal
 * if a header corresponding to a valid user is found.
 */
public class XAuthTokenFilter extends GenericFilterBean {

    private final static String XAUTH_TOKEN_HEADER_NAME = "x-auth-token";

    private UserDetailsService detailsService;

    private TokenProvider tokenProvider;

    public XAuthTokenFilter(UserDetailsService detailsService, TokenProvider tokenProvider) {
        this.detailsService = detailsService;
        this.tokenProvider = tokenProvider;
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        System.out.println("inside the XAuthToken Fileter");
        try {
            HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
            String authToken = httpServletRequest.getHeader(XAUTH_TOKEN_HEADER_NAME);
            System.out.println("Auth token is " + authToken);
            if (StringUtils.hasText(authToken)) {
                String username = this.tokenProvider.getUserNameFromToken(authToken);
                System.out.println("usr name is " + username);
                UserDetails details = this.detailsService.loadUserByUsername(username);
                if (this.tokenProvider.validateToken(authToken, details)) {
                    UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(details, details.getPassword(), details.getAuthorities());
                    SecurityContextHolder.getContext().setAuthentication(token);
                }
            }
            filterChain.doFilter(servletRequest, servletResponse);
        } catch (Exception ex) {
            throw new RuntimeException(ex);
        }
    }
}
