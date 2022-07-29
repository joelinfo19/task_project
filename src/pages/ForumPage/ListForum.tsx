import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { CategoryThread } from './components/CategoryThread';

export const ListForum = () => {
    const state = useFetch('https://task-js.herokuapp.com/api/forums');
    const { data, loading, error } = state;

    const forumsFor = (idForum: string) => {
        if (data != null) {
            const { threads } = data
            return threads.filter(thread => thread.forumId == idForum);
        } else {
            return null
        }
    }
    return (
        <div>
            {
                loading
                    ? <p>Cargando...</p>
                    : data!.forums.map(forum => <CategoryThread category={forum.title} threads={forumsFor(forum._id)} />)
            }
        </div>
    )
}
