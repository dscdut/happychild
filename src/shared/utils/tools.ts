import { notification } from 'antd';

export const showError = (error: unknown | string) => {
  const message = (() => {
    if (typeof error === 'string') return error;
    if (error instanceof Error) {
      return error?.message;
    }
    return 'Server Internall Error. Please try later !!!!';
  })();

  return notification.error({
    message,
  });
};

export const getPopupContainer = (
  node: HTMLElement | undefined,
  queries = ['.ant-modal', '.ant-drawer'],
) => {
  const parent = document.querySelector(
    queries?.find(e => document.querySelector(e)) as string,
  );
  if (node && parent?.contains(node)) return node?.parentNode as HTMLElement;
  return document.body;
};

export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
