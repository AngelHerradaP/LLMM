<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Ejercicio0</title>
        </head>
        <body>
           <table>
                <tr>
                    <th>Plataforma</th>
                    <th>Titulo</th>
                    <th>Director</th>
                    <th>Año</th>
                </tr>
                <xsl:for-each select="cartelera/pelicula">
                    <xsl:sort select="anyo" order="ascending"></xsl:sort>
                    <xsl:if test="anyo &gt;= 2010">
                        <tr>
                            <td><xsl:value-of select="@plataforma"></xsl:value-of></td>
                            <td><xsl:value-of select="titulo"></xsl:value-of> (<xsl:value-of select="titulo/@idioma"></xsl:value-of>)</td>
                            <td><xsl:value-of select="director"></xsl:value-of></td>
                            <td><xsl:value-of select="anyo"></xsl:value-of></td>
                        </tr>
                    </xsl:if>
                </xsl:for-each>
           </table>
            <ol>
                <xsl:for-each select="cartelera/pelicula">
                    <xsl:if test="anyo &lt; 2010">
                        <tr>
                            <td><xsl:value-of select="titulo"></xsl:value-of></td>
                            <td><xsl:value-of select="director"></xsl:value-of></td>
                            <td><xsl:value-of select="anyo"></xsl:value-of></td>
                        </tr>
                    </xsl:if>
                </xsl:for-each>
           </ol>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>