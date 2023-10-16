package com.example.demo.Service;



import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
	
	  @Value("${application.jwt.secret-key}")
	    private String secretKey;

	public String extractUsername(String token) {
		// TODO Auto-generated method stub
		  return extractClaim(token, Claims::getSubject);
	}
	
	   public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
	        final Claims claims = extractAllClaims(token);
	        return claimsResolver.apply(claims);
	    }
	
	private Claims extractAllClaims(String token) {
		return Jwts
				.parserBuilder()
				.setSigningKey(getSigningKey())
				.build()
				.parseClaimsJws(token)
				.getBody();
	}
	
	private Key getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }
	  public String generateToken(UserDetails userDetails) {
	        return createToken(new HashMap<>(), userDetails);
	    }

	    public String createToken(Map<String, Object> extraClaims, UserDetails userDetails) {
	        return Jwts
	                .builder()
	                .setClaims(extraClaims)
	                .setSubject(userDetails.getUsername())
	                .setIssuedAt(new Date(System.currentTimeMillis()))
	                .setExpiration(new Date(System.currentTimeMillis() + 24 * 60 * 60 * 1000))
	                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
	                .compact();
	    }
	    public boolean isTokenValid(String token, UserDetails userDetails) {
	        final String email = extractUsername(token);
	        return (email.equals(userDetails.getUsername())) && !isTokenExpired(token);
	    }
        
	    private boolean isTokenExpired(String token) {
	        return extractExpiration(token).before(new Date());
	    }

	    private Date extractExpiration(String token) {
	        return extractClaim(token, Claims::getExpiration);
	    }

	
  

}