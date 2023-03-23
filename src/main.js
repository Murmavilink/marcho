import { menu } from "./modules/menu";
import { burgerMenu } from "./modules/menu";
import { pageListener } from "./modules/pageListener";
import { auth } from "./modules/auth"; 
import { sendForm } from "./modules/sendForm";


sendForm({idForm: 'footer-form'});
menu();
burgerMenu();
pageListener();
auth();