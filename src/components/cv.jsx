export function CV({
  name,
  email,
  phone,
  major,
  school,
  monthYr,
  experiences,
  printRef
}) {
  return (
    <div className="cv" ref={printRef}>
      <div>
        <div>{name}</div>
        <div>
          {email} | {phone}
        </div>
      </div>
      <div>
        <div>
          <span>{school}</span>
          <span>{monthYr}</span>
        </div>
        <div>{major}</div>
      </div>
      <div>
        {experiences.map((experience) => (
          <>
            <div>{experience.company}</div>
            <div>{experience.position}</div>
            <div>{experience.responsibilities}</div>
            <div>
              {experience.startdate}
              {"-"}
              {experience.enddate}
            </div>
            <div></div>
          </>
        ))}
      </div>
    </div>
  );
}
