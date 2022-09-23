int bombillo1=13;
int bombillo2=9;
int espera=500;
void setup() {
  // put your setup code here, to run once:
  pinMode(bombillo1, OUTPUT);
  pinMode(bombillo2, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(bombillo1,HIGH);
   digitalWrite(bombillo2,LOW);
  delay(espera*2);
  digitalWrite(bombillo2,HIGH);
  digitalWrite(bombillo1,LOW);
  delay(espera);
}
