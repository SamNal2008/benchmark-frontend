export interface FakeData {
  id: number,
  name: string
}

export const fakeDatabase: FakeData[] = [
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
