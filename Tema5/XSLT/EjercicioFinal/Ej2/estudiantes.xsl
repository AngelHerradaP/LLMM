<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/estudiantes">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="estudiantes.css"></link>
            <title>Estudiantes</title>
        </head>
        <body>
            <h1>Lista de Estudiantes</h1>
            <xsl:for-each select="estudiante">
                <xsl:sort select="edad" order="descending"></xsl:sort>
                <xsl:choose>
                        <xsl:when test="calificacion &gt; 9">
                            <div class="calificacion">
                                <ul>
                                    <li><span>Nombre: </span><xsl:value-of select="nombre"/></li>
                                    <li><span>Edad: </span><xsl:value-of select="edad"/></li>
                                    <li><span>Calificacion: </span><xsl:value-of select="calificacion"/></li>
                                </ul>
                            </div>
                        </xsl:when>
                        <xsl:otherwise>
                            <div>
                                <ul>
                                    <li><span>Nombre: </span><xsl:value-of select="nombre"/></li>
                                    <li><span>Edad: </span><xsl:value-of select="edad"/></li>
                                    <li><span>Calificacion: </span><xsl:value-of select="calificacion"/></li>
                                </ul>
                            </div>
                        </xsl:otherwise>
                    </xsl:choose>
            </xsl:for-each>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>