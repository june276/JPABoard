package com.lec.spring.service;

import com.lec.spring.domain.Attachment;
import org.springframework.stereotype.Service;

public interface AttachmentService {
	Attachment findById(Long id);
	
	
}
