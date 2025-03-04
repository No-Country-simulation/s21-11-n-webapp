# IMAGEN MODELO, HACER UN BUILD PARA LUEGO COPIARLO Y QUE LA IMAGEN FINAL SEA MAS LIVIANO.
FROM maven:3.8.6-amazoncorretto-17 AS build

# DEFINIR DIRECTORIO RAIZ DE NUESTRO CONTENEDOR
WORKDIR /app


# Copiar archivos de configuración antes para aprovechar caché
COPY pom.xml ./
RUN mvn dependency:go-offline

# Copiar el código fuente y compilarlo
COPY src ./src

# PERMITE EJECUTAR EL INSTALL A PESAR DE NO TENER LAS ENVS. -D SKIP TESTS.
RUN ./mvnw clean package -DskipTests

FROM amazoncorretto:17

WORKDIR /app

# CONSTRUIR NUESTRA APLICACION
COPY --from=build /app/target/*.jar app.jar

# INFORMAR EL PUERTO DONDE SE EJECUTA EL CONTENEDOR (INFORMATIVO)
EXPOSE 8080

# LEVANTAR NUESTRA APLICACION CUANDO EL CONTENEDOR INICIE
ENTRYPOINT ["java","-jar","app/app.jar"]