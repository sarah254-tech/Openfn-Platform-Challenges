fn((state) => {
  const { newPatients, globalOrgUnits } = state;

  const getOrgUnit = (city) =>
    globalOrgUnits.find((orgUnit) => orgUnit.source === city).id;

  const mappedEntities = newPatients.map((patient) => {
    const [firstName = "Patient", lastName = "Test"] = (
      patient.name || ""
    ).split(" ");

    const orgUnit = getOrgUnit(patient.address.city);

    const attributes = [
      { attribute: "w75KJ2mc4zz", value: firstName },
      { attribute: "zDhUuAYrxNC", value: lastName },
      { attribute: "cejWyOfXge6", value: "Male" },
    ];

    return { ...patient, attributes: attributes, orgUnit: orgUnit };
  });

  return { ...state, mappedEntities };
});

each(
  "mappedEntities[]",
  create("trackedEntityInstances", {
    orgUnit: dataValue("orgUnit"),
    trackedEntityType: "nEenWmSyUEp",
    attributes: dataValue("attributes"),
  })
);
