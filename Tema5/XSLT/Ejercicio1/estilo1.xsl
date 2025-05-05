<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Pedido</title>
        </head>
        <body>
            <table>
                <tr>
                    <th>Peso</th>
                    <th>RAM</th>
                    <th>Disco</th>
                    <th>Precio</th>
                </tr>
                <xsl:for-each select="pedido/portatiles/portatil">
                    <xsl:if test="precio &lt; 900 and disco/@tipo = 'ssd'">
                        <td><xsl:value-of select="peso"></xsl:value-of></td>
                        <td><xsl:value-of select="ram"></xsl:value-of></td>
                        <td><xsl:value-of select="disco"></xsl:value-of></td>
                        <td><xsl:value-of select="precio"></xsl:value-of></td>
                    </xsl:if>
                </xsl:for-each>
            </table>
            <table>
                <tr>
                    <th>Plataforma</th>
                    <th>RAM</th>
                    <th>Bateria</th>
                </tr>
                <xsl:for-each select="pedido/tablets/tablet">
                    <xsl:if test="caracteristicas/memoria &gt;= 2 and caracteristicas/tamanio &gt;= 7">
                        <tr>
                            <td><xsl:value-of select="plataforma"></xsl:value-of></td>
                            <td><xsl:value-of select="caracteristicas/memoria"></xsl:value-of></td>
                            <td><xsl:value-of select="caracteristicas/bateria"></xsl:value-of></td>
                        </tr>
                    </xsl:if>
                </xsl:for-each>
            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>