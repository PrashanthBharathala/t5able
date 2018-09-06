package com.data.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.data.vo.TableDto;

@Controller
public class GetTableData {
	@GetMapping("/getHome")
	public String getHome()
	{
		return "datatable";
	}
	
	@PostMapping("/getTotalTableData")
	public ResponseEntity<Object> getTableInformation(TableDto tableDto)
	{
		System.out.println(tableDto);
		//System.out.println(tableDto.getFirstArray());
		return new ResponseEntity<Object>("hi",HttpStatus.OK);
	}

}
