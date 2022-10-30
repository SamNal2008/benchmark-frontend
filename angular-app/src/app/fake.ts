export const fakeDatabase = [
  {
    id: 1,
    name: 'Samy'
  },
  {
    id: 2,
    name: 'Evan'
  }
]

export const fakeApi = () => {
  Promise.resolve(fakeDatabase);
}
