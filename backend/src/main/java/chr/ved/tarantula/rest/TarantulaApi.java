package chr.ved.tarantula.rest;

import chr.ved.tarantula.domain.model.Tarantula;
import chr.ved.tarantula.domain.service.TarantulaService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"${app.dev.frontend.local}"})
@RestController
@RequestMapping("/api/tarantulas")
@RequiredArgsConstructor
public class TarantulaApi {
    private final TarantulaService tarantulaService;

    @Operation(summary = "Get all Tarantulas")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found Tarantulas",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Tarantula.class)) }),
            @ApiResponse(responseCode = "404", description = "Tarantulas not found",
                    content = @Content) })
    @GetMapping
    public List<Tarantula> findAll() {
        return tarantulaService.findAll();
    }

    @Operation(summary = "Get a Tarantula by its id")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Found the Tarantula",
                    content = { @Content(mediaType = "application/json",
                            schema = @Schema(implementation = Tarantula.class)) }),
            @ApiResponse(responseCode = "400", description = "Invalid id supplied",
                    content = @Content),
            @ApiResponse(responseCode = "404", description = "Tarantula not found",
                    content = @Content) })
    @GetMapping(value = "/{id}")
    public Tarantula findById(@PathVariable("id") String id) {
        return tarantulaService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String create(@RequestBody Tarantula resource) {
        return "";//tarantulaService.create(resource);
    }

    @PutMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable( "id" ) Long id, @RequestBody Tarantula resource) {
        //tarantulaService.update(resource);
    }

    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") String id) {
        //tarantulaService.deleteById(id);
    }

}
//400 Bad Request – client sent an invalid request, such as lacking required request body or parameter
//        401 Unauthorized – client failed to authenticate with the server
//        403 Forbidden – client authenticated but does not have permission to access the requested resource
//        404 Not Found – the requested resource does not exist
//        412 Precondition Failed – one or more conditions in the request header fields evaluated to false
//        500 Internal Server Error – a generic error occurred on the server
//        503 Service Unavailable – the requested service is not available