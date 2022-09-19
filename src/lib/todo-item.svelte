<style>
    .todo{
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-gap: 00.5rem;
        align-items: center;
        margin: 0 0 0.5rem 0;
        padding: 0.5rem;
        background-color: white;
        border-radius: 8px;
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));
        transform: translate(-1px, -1px);
        transition: filter 0.2s, transform 0.2s;
    }

    .todo button {
        width: 2em;
        height: 2em;
        border: none;
        background-color: transparent;
        background-position: 50% 50%;
        background-repeat: no-repeat;
    }

    .todo input {
        flex: 1;
        padding: 00.5em 2em 0.5em 0.8em;
        border-radius: 3px;
    }
    
    button.toggle {
        border: 2px solid rgba(0, 0, 0, 0.4);
        border-radius: 50%;
        box-sizing: border-box;
        background-size: 1em auto;
    }

    .text {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .save {
        position: absolute;
        right: 0;
        opacity: 0;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='currentColor' class='bi bi-save2-fill' viewBox='0 0 16 16'%3E%3Cpath d='M8.5 1.5A1.5 1.5 0 0 1 10 0h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h6c-.314.418-.5.937-.5 1.5v6h-2a.5.5 0 0 0-.354.854l2.5 2.5a.5.5 0 0 0 .708 0l2.5-2.5A.5.5 0 0 0 10.5 7.5h-2v-6z'/%3E%3C/svg%3E");
    }

    /* yg ada komanya masih ga begitu ngerti */
    .todo input:focus + .save,
    .save:focus {
        transition: opacity 0.2s;
        opacity: 1;
    }

    .delete {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash-fill' viewBox='0 0 16 16'%3E%3Cpath d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z'/%3E%3C/svg%3E");
        opacity: 0.2;
    }

    .delete:hover,
    .delete:focus {
        transition: opacity 0.4s;
        opacity: 1;
    }

    /* .done {
        transform: none;
        opacity: 0.4;
        filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
    }

    .done .toggle {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-check-lg' viewBox='0 0 16 16'%3E%3Cpath d='M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z'/%3E%3C/svg%3E");
        background-size: 80%;
        opacity: 0.4;
    } */

    /* ^2 atas ini utk api point katanya, kurang ngerti juga 
    TODO: uncomment when the API endpoints are available*/
</style>

<div class="todo done">
    <form action="" method="">
        <input type="hidden" name="done" value=""/>
        <button aria-label="Mark done/not done" class="toggle"></button>
    </form>

    <form action="" method="" class="text">
        <input type="text"/>
        <button aria-label="Save todo" class="save"></button>
    </form>

    <form action="" method="">
        <button aria-label="Delete todo" class="delete"></button>
    </form>
</div>

