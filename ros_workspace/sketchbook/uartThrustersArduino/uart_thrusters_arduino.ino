int thrusters[8] = {1500, 1500 ,1500, 1500, 1500 ,1500, 1500, 1500};

const int numValues = 8; //number of values seperated by spaces in packet being sent down
int packetInput[numValues] = {0, 0, 0, 0, 0, 0, 0, 0};

//for serial event
String packet = "";         // a String to hold incoming data
boolean packetComplete = false;  // whether the string is complete

void setup() {
  // initialize serial:
  Serial.begin(115200);
  // reserve 1024 bytes for the packet:
  packet.reserve(1024);
}

void loop() {
  // print the string when a newline arrives:
  if (packetComplete) {
    //Serial.println(packet); 
    
    if(!receivePacket()){
      Serial.println("Packet read failed! ");
    } else {
      for(int i = 0; i < numValues; i++){
        Serial.print(packetInput[i] + ", ");
      }
      Serial.println("\n--------------------------------");
    }
    
    // clear the string:
    packet = "";
    packetComplete = false;
  }
}


void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the packet:
    packet += inChar;
    // if the incoming character is a newline, set a flag so the main loop can
    // do something about it:
    if (inChar == '\n') {
      packetComplete = true;
    }
  }
}
