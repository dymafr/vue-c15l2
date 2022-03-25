import type { InjectionKey } from 'vue';
import type { AuthorInterface } from './Author.interface';

export const authorKey = Symbol() as InjectionKey<{
  data: AuthorInterface;
  updateBirthday: () => void;
}>;
