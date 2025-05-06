<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/peliculas">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="peliculas.css"></link>
            <title>Peliculas</title>
        </head>
        <body>
            <h1>Lista de Peliculas</h1>
            <div class="container">
            <xsl:for-each select="pelicula">
            <xsl:sort select="anio" order="descending"></xsl:sort>
            <xsl:choose>
                    <xsl:when test="duracion &gt; 150">
                        <div class="duracion">
                            <h2><xsl:value-of select="titulo"/></h2>
                            <ul>
                                <li><span>Genero: </span><xsl:value-of select="genero"/></li>
                                <li><span>Año: </span><xsl:value-of select="anio"/></li>
                                <li><span>Duracion: </span><xsl:value-of select="duracion"/></li>
                            </ul>
                        </div>
                    </xsl:when>
                    <xsl:otherwise>
                        <div>
                            <h2><xsl:value-of select="titulo"/></h2>
                            <ul>
                                <li><span>Genero: </span><xsl:value-of select="genero"/></li>
                                <li><span>Año: </span><xsl:value-of select="anio"/></li>
                                <li><span>Duracion: </span><xsl:value-of select="duracion"/></li>
                            </ul>
                        </div>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:for-each>
            </div>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>