export const useStorage = (type: 'get' | 'set', name: string, value?: any) => {
  switch (type) {
    case 'get':
      if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name)!);
      } else {
        return null;
      }

    case 'set':
      if (name && value) {
        localStorage.setItem(name, JSON.stringify(value));
      } else {
        return null;
      }
  }
};
