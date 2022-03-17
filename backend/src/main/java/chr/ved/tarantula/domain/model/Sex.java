package chr.ved.tarantula.domain.model;

public enum Sex {
    MALE("1.0.0"),
    FEMALE("0.1.0"),
    SUSPECTED_MALE("?.0.0"),
    SUSPECTED_FEMALE("0.?.0"),
    UNSEXED("0.0.1");

    public final String type;

    Sex(String type){ this.type = type;}

}
