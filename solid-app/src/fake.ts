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


export const fakeApi = (errorWanted?: boolean): Promise<string> => {
  console.log(errorWanted);
  return new Promise((resolve, reject) => setTimeout(() => errorWanted ? reject('Error') : resolve(JSON.stringify(fakeDatabase)), 5000));
}