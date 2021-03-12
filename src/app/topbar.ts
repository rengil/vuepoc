import { Subject } from 'rxjs';

const subject = new Subject();

export const topbarService = {
  close: () => subject.next(false),
  open: () => subject.next(true),
  isOpen: () => subject.asObservable(),
};
