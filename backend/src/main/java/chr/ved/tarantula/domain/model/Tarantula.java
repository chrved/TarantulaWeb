package chr.ved.tarantula.domain.model;

import lombok.Data;

@Data
public class Tarantula {
    private String id;
    private String name;
    private String dob;
    private String acquired;
    private Sex sex;

}

//    val id: String = UUID.randomUUID().toString(),
//        var acquired: String = "Unknown",
//        var commonName: String = "Unknown",
//        var food: List<Food> = mutableListOf(),
//        var habitatType: HabitatType = HabitatType.UNKNOWN,
//        var moult: List<String> = mutableListOf(),
//        var name: String = "Unknown",
//        var scientificName: ScientificName = ScientificName(),
//        var sex: Sex = Sex.UNSEXED,
//        var speciesType: SpeciesType = SpeciesType.UNKNOWN,
//        var dob: String = "Unknown"
