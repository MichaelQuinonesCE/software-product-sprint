package com.google.sps.servlets;
import java.util.*;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
  
    // Convert the server stats to JSON
    String json = getResponse();
    
    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
  private String getResponse() {
    String json = "{";
    json += "\"Name\": ";
    json += "\"" + "Michael" + "\"";
    json += ", ";
    json += "\"Nickname\": ";
    json += "\"" + "Mike" + "\"";
    json += ", ";
    json += "\"Place\": ";
    json +=  "\"Puerto Rico\"";
    json += "}";
    return json;
  }
}
