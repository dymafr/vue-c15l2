import { ref } from 'vue';

interface User {
  name: string;
}

export function useFetchUsers() {
  const users = ref<User[] | null>(null);
  const isLoading = ref(true);
  const errors = ref<any>(null);

  fetch('https://restapi.fr/api/vue3users')
    .then((res) => res.json())
    .then((json) => (users.value = json))
    .catch((err) => (errors.value = err))
    .finally(() => (isLoading.value = false));

  return { users, isLoading, errors };
}
