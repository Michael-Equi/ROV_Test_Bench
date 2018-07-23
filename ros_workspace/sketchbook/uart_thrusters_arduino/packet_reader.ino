// print the string when a newline arrives:
inline void replySerial(){
 if (stringComplete) {
    Serial.println(inputString);
    // clear the string:
    inputString = "";
    stringComplete = false;
    Serial.println("msg received");
   }
}
  
inline void receivePacket() {
  for (int i=0; i < packetSize; i++) {
    if(i == 0){ // T1
      inputString[i+4] = '\0';
      topside.T1 = atoi((const char *)&inputString[i]);
      i=i+4;
      }
      if(i == 5){ //T2
     inputString[i+4] = '\0';;
      topside.T2 = atoi((const char *)&inputString[i]);
      i=i+4;
      }
      if(i == 10){ // T3
      inputString[i+4] = '\0';
      topside.T3 = atoi((const char *)&inputString[i]);
      i=i+4;
      }
      if(i == 15){// T4
      inputString[i+4] = '\0';
      topside.T4 = atoi((const char *)&inputString[i]);
      i=i+4;
      }
      if(i == 20){ //  T5
      inputString[i+4] = '\0';
      topside.T5 = atoi((const char *)&inputString[i]);
      i=i+4;
      }
      if(i == 25){ //  T6
      inputString[i+4] = '\0';
      topside.T6 = atoi((const char *)&inputString[i]);
      i=i+4;
      }
      if(i == 30){
      inputString[i+1] = '\0';
      topside.Buzzer = atoi((const char *)&inputString[i]);
      i=i+1;
      }
      if(i == 32){
      inputString[i+1] = '\0';
      topside.Solenoid = atoi((const char *)&inputString[i]);
      i=i+1;
      }
      if(i == 34){
      inputString[i+1] = '\0';
      topside.Light = atoi((const char *)&inputString[i]);
      i=i+1;
      }
      if(i == 36){
      inputString[i+1] = '\0';
      topside.PMC = atoi((const char *)&inputString[i]);
      i=i+1;
      }
      if(i == 38){
      inputString[i+1] = '\0';
      topside.Ext = atoi((const char *)&inputString[i]);
      }
  }
}
