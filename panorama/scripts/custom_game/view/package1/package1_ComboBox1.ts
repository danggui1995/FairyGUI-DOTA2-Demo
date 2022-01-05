import { package1_ComboBox1_data } from "./package1_data";

export module Panorama{
    export class package1_ComboBox1 extends package1_ComboBox1_data{
        constructor()
        {
            super();

            //add code to here
        }

        public OnInit():void
        {
            this.isFullScreen = true;

            super.OnInit();
        }

        public OnShow():void
        {

        }

        public OnClose():void
        {

        }
    }
}    
