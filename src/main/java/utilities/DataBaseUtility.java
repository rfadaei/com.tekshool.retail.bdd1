package utilities;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.opencsv.CSVWriter;

public class DataBaseUtility {

	// java provides JDBC (Java Data Base Connectivity) API to connect to data bases

	public static Connection connection;

	private static Statement statement;

	private static ResultSet resultSet;

	private static String url = "jdbc:postgresql://localhost:5433/dvdrental";

	private static String userName = "postgres";

	private static String password = "root";

	// this method will establish a connection between selenium and data base using
	// object of connection class
	// and DriverManager.getConnection method

	public static void setupConnection() {
		try {
			connection = DriverManager.getConnection(url, userName, password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static ResultSet runQuery(String query) {
		try {
			statement = connection.createStatement();
			resultSet = statement.executeQuery(query);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return resultSet;
	}

	/**
	 * this method will write all results to a csv file we are creating new csv file
	 * using File class obj we are writing to that file using file writer
	 */
	
	public static void returnResult() {
		try {
			while (resultSet.next()) {
				CSVWriter csvWriter;
				String output = "./output/book.csv";
				File file = new File(output);

				FileWriter fileWriter = new FileWriter(file);
				csvWriter = new CSVWriter(fileWriter);
				csvWriter.writeAll(resultSet, true);
				csvWriter.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * This method closes the connection with DB
	 */
	
	
	public static void closeDBConnection() {
		if (connection != null) {
			try {
				connection.close();
			} catch (Exception e) {
			} finally {
				try {
					connection.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}

	}
}
