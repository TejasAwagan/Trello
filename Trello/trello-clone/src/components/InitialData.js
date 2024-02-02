export const InitialData = {
    boards:  [
        {
            id : 'board1',
            columnOrder : ['todo' , 'doing' , 'done'],
            columns : [
                {
                    id : 'todo',
                    boardId : 'board1',
                    title : 'Resources',
                    cardOrder : ['card1', 'card2', 'card3'],
                    cards: [
                        {
                            id: 'card1',
                            boardId: 'board1',
                            columnId: 'todo',
                            title: 'Task 1',
                            image: null
                        },
                        {
                            id: 'card2',
                            boardId: 'board1',
                            columnId: 'todo',
                            title: 'Task 2 ',
                            image: null
                        },
                        {
                            id: 'card3',
                            boardId: 'board1',
                            columnId: 'todo',
                            title: 'Task 3',
                            image: null
                        }
                    ]
                },
                {
                    id : 'doing',
                    boardId : 'board1',
                    title : 'To Do',
                    cardOrder : ['card4', 'card5', 'card6'],
                    cards: [
                        {
                            id: 'card4',
                            boardId: 'board1',
                            columnId: 'doing',
                            title: 'creating Modules',
                            image: null
                        },
                        {
                            id: 'card5',
                            boardId: 'board1',
                            columnId: 'doing',
                            title: 'testing',
                            image: null
                        },
                
                    ]
                },
                {
                    id : 'done',
                    boardId : 'board1',
                    title : 'Doing',
                    cardOrder : ['card7', 'card8', 'card9', 'card10', 'card11'],
                    cards: [
                        {
                            id: 'card7',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Task 6 ',
                            image: null
                        },
                        {
                            id: 'card8',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Task 7',
                            image: null
                        },

                    ]
                },
                {
                    id : 'done',
                    boardId : 'board1',
                    title : 'Done',
                    cardOrder : ['card7', 'card8', 'card9', 'card10', 'card11'],
                    cards: [
                        {
                            id: 'card7',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Task 6 ',
                            image: null
                        },
                        {
                            id: 'card8',
                            boardId: 'board1',
                            columnId: 'done',
                            title: 'Task 7',
                            image: null
                        },

                    ]
                }

            ]
        }
    ]
}