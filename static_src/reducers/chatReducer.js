import update from 'react-addons-update'; // Это библиотека для изменения Store.
import { SEND_MESSAGE } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

// Теперь нужно соответствующим образом обрабатывать эти Action’ы в Reducer’ах. 
//Пока у нас будет один Reducer, отвечающий за чаты.


const initialStore = {
    chats: {
        1: {title: 'Чат 1', messageList: [1]},
        2: {title: 'Чат 2', messageList: [2]},
        3: {title: 'Чат 3', messageList: []},
    },
};

export default function chatReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            return update(store, {
                chats: { $merge: { [action.chatId]:{
                    title: store.chats[action.chatId].title,
                    messageList: [...store.chats[action.chatId].messageList,
                action.messageId]
                }}},
            });
        }


        case ADD_CHAT: {
            const chatId = Object.keys(store.chats).length + 1;
            return update(store, {
                chats: { $merge: {
                    [chatId]: {
                        title: action.title, messageList: []
                    }}},
            });
        }
        default:
            return store;
    }
}

/*Функция-reducer принимает на вход store и action. Далее делается switch по типу Action’а. 
Если найдется подходящий case, будет возвращен измененный Store. 
Если нет, то вернется тот же, что и был.
Изменение Store происходит при помощи функции update из react-addons-update.
Дело в том, что Store Redux’а спроектирован по принципу неизменяемости. 
Это значит, что при обновлении Store переменные в нем не меняются, 
а просто создается их новый набор. Для этого можно использовать,
например, функцию Object.assign(), но мы применяем update,
которая автоматизирует этот процесс. Причем есть два способа применения update:
$set — полное обновление переменной.
$merge — применяется для словарей и обновляет только значение указанного ключа.
Как видите, логика обновления Store в reducer’е очень похожа на то, 
как мы обновляли state внутри компонента.
 */