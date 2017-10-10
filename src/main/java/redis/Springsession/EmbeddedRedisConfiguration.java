package redis.Springsession;

import java.io.IOException;

import javax.annotation.PreDestroy;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisServer;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

import redis.clients.jedis.Protocol;

@Configuration
@EnableRedisHttpSession
public class EmbeddedRedisConfiguration {
    private static RedisServer redisServer;
    @Bean
    public JedisConnectionFactory connectionFactory() throws IOException {
    	JedisConnectionFactory connection = new JedisConnectionFactory();
        connection.setPort(6379);
        connection.setHostName("localhost");
        return connection;
    }

   
}
