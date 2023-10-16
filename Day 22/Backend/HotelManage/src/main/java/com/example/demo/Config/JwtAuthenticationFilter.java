package com.example.demo.Config;



import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.Service.JwtService;

import io.micrometer.common.lang.NonNull;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;



@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter{
	
	private final  JwtService jwtservice ;
	private final UserDetailsService userDetailsService ;

	@Override
	protected void doFilterInternal(
			 @NonNull HttpServletRequest request, 
			 @NonNull HttpServletResponse response, 
			 @NonNull FilterChain filterChain)
			throws ServletException, IOException {
		 if (request.getServletPath().contains("/auth")) {
		      filterChain.doFilter(request, response);
		      return;}
		 final String authHeader = request.getHeader("Authorization");
	        final String token;
	        final String username;
	        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
	            filterChain.doFilter(request, response);
	            return;
	        }
		token = authHeader.substring(7);
		username = jwtservice.extractUsername(token);
		 if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
	            UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
	                   
	            
	            
	            if (jwtservice.isTokenValid(token, userDetails)) {
	                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
	                        userDetails, null, userDetails.getAuthorities());
	                usernamePasswordAuthenticationToken
	                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
	                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
	            }
	            filterChain.doFilter(request, response);
		 }
	}

}