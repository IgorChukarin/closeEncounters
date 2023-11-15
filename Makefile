JAVA=C:\Users\Zigor\Desktop\closeEncounters\jre1.8.0_341\bin\java.exe
PROJECT=C:\Users\Zigor\Desktop\closeEncounters

win:
	java -Dmaven.multiModuleProjectDirectory=$(PROJECT) "-Dmaven.home=C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2021.2.3\plugins\maven\lib\maven3" "-Dclassworlds.conf=C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2021.2.3\plugins\maven\lib\maven3\bin\m2.conf" "-Dmaven.ext.class.path=C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2021.2.3\plugins\maven\lib\maven-event-listener.jar" "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2021.2.3\lib\idea_rt.jar=60605:C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2021.2.3\bin" -Dfile.encoding=UTF-8 -classpath "C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2021.2.3\plugins\maven\lib\maven3\boot\plexus-classworlds-2.6.0.jar;C:\Program Files\JetBrains\IntelliJ IDEA Community Edition 2021.2.3\plugins\maven\lib\maven3\boot\plexus-classworlds.license" org.codehaus.classworlds.Launcher -Didea.version=2021.2.3 package
	$(JAVA) -jar target\closeEncounters-1.0-SNAPSHOT.jar

mac:
	JAVA_HOME=~/Desktop/closeEncounters/jre1.8.0_341 java -jar target/closeEncounters-1.0-SNAPSHOT.jar

webs:
	cd web && start page.html








