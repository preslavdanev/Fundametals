function chatLogger(arr){


    let currentChat;
    let currentCommand;
    let currentRow;    
    let chat = [];
        
    while (currentCommand !== "end") {
        currentRow = arr[0].split(' ');
        currentCommand = currentRow[0];
        currentChat = currentRow[1];
        switch(currentCommand){
            case "Chat":
                chat.push(currentChat);
                currentRow = arr;
                break;
            case "Delete":
                if(arr.includes(currentChat)){
                   let x = arr.indexOf(currentChat);
                   arr.slice(x,1);
                }

            case "Edit":
            case "Pin":
            case "Spam":
        }
        
    }


}
chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])