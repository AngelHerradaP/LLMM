<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Ejemplo Teoria</title>
        </head>
        <body>
            <h2>Productos</h2>
            <ul>
                <xsl:for-each select="productos/producto">
                    <xsl:sort select="precio" data-type="number" order="ascending"/>
                    <xsl:if test="@tipo = 'electronica'">
                        <li>
                            <xsl:value-of select="nombre"/> - <xsl:value-of select="precio"/> Euros - <xsl:value-of select="@tipo"></xsl:value-of>
                        </li>
                    </xsl:if>
                </xsl:for-each>
            </ul>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>