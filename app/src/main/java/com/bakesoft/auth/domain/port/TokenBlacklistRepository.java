package com.bakesoft.auth.domain.port;


import com.bakesoft.auth.domain.model.TokenBlacklist;

import java.util.Optional;


public interface TokenBlacklistRepository {
    Optional<TokenBlacklist> findByToken(String token);

    void save(TokenBlacklist tokenBlacklist);

}
