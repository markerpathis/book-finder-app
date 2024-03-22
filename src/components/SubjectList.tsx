const SubjectList = () => {
  const subjects = [
    { id: 1, name: "Fiction", search: "fiction" },
    { id: 2, name: "Drama", search: "drama" },
    { id: 3, name: "Fantasy", search: "fantasy" },
    { id: 4, name: "Science Fiction", search: "science+fiction" },
  ];

  return (
    <ul>
      {subjects.map((subject) => (
        <li key={subject.id}>{subject.name}</li>
      ))}
    </ul>
  );
};

export default SubjectList;
