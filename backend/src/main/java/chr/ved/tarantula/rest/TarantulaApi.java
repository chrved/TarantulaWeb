package chr.ved.tarantula.rest;

import chr.ved.tarantula.domain.model.Tarantula;
import chr.ved.tarantula.domain.service.TarantulaService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarantulas")
public class TarantulaApi {
    private final TarantulaService tarantulaService;
    public TarantulaApi(TarantulaService tarantulaService){
        this.tarantulaService = tarantulaService;
    }

    @GetMapping
    public List<Tarantula> findAll() {
        return tarantulaService.findAll();
    }

    @GetMapping(value = "/{id}")
    public Tarantula findById(@PathVariable("id") String id) {
        return tarantulaService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String create(@RequestBody Tarantula resource) {
        return tarantulaService.create(resource);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable( "id" ) Long id, @RequestBody Tarantula resource) {
        tarantulaService.update(resource);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") String id) {
        tarantulaService.deleteById(id);
    }

}
//400 Bad Request – client sent an invalid request, such as lacking required request body or parameter
//        401 Unauthorized – client failed to authenticate with the server
//        403 Forbidden – client authenticated but does not have permission to access the requested resource
//        404 Not Found – the requested resource does not exist
//        412 Precondition Failed – one or more conditions in the request header fields evaluated to false
//        500 Internal Server Error – a generic error occurred on the server
//        503 Service Unavailable – the requested service is not available