get("users");

fn((state) => {
  const newPatients = state.data;
  return { ...state, newPatients };
});
