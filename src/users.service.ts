import { ref } from 'vue';

interface User {
  name: string;
}

export function useFetchUsers() {
  const users = ref<User[] | null>(null);
  const isLoading = ref(true);
  const errors = ref<any>(null);

  // Syntaxe 1
  // fetch('https://restapi.fr/api/vue3users')
  //   .then((res) => res.json())
  //   .then((json) => (users.value = json))
  //   .catch((err) => (errors.value = err))
  //   .finally(() => (isLoading.value = false));

  // Syntaxe 2
  (async () => {
    try {
      users.value = await (
        await fetch('https://restapi.fr/api/vue3users')
      ).json();
    } catch (err) {
      errors.value = err;
    } finally {
      isLoading.value = false;
    }
  })();

  return { users, isLoading, errors };
}
