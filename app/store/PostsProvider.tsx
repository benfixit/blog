"use client";
import * as React from 'react';
import { createContext, ReactNode } from 'react';
import { PostType } from '@/typings';

type Props = {
  posts: Array<PostType>;
};

const PostsContext = createContext<Props>({ posts: [] });

export function PostsProvider({ posts, children }: { posts: Array<PostType>, children: ReactNode }) {

    return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}

export function usePosts() {
  const { posts, ...rest } = React.useContext(PostsContext);

  if (posts === null) {
    throw new Error(
      "Couldn't find posts. Is your component inside PostsContext or does it have posts?"
    );
  }

  return { posts, ...rest };
}
