package com.bakesoft.bakesoft.user.domain.port;
import com.bakesoft.bakesoft.user.domain.model.UserFullData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IUserFullData  extends JpaRepository<UserFullData, Long>{
}
