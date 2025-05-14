<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/productos">
    <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="productos.css"></link>
            <title>Productos</title>
        </head>
        <body>
            <h1>Listado de Productos(<xsl:value-of select="empresa/nombre"/>)</h1>
            <table>
                <tr class="cabecera">
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Peso</th>
                    <th>Descripcion</th>
                    <th>Ciudades</th>
                </tr>
                <xsl:for-each select="producto">
                    <xsl:sort select="precio" order="ascending"/>
                    <xsl:choose>
                        <xsl:when test="peso &lt; 1">
                            <tr class="verde">
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda = 'eur'">
                                        <td><span class="euro"><xsl:value-of select="nombre"/></span></td>
                                        <td><xsl:value-of select="precio"/>euros</td>
                                    </xsl:when>
                                    <xsl:when test="precio/@moneda = 'usd'">
                                        <td><span class="dolar"><xsl:value-of select="nombre"/></span></td>    
                                        <td><xsl:value-of select="precio"/>$</td>
                                    </xsl:when>
                                </xsl:choose>
                                <td><xsl:value-of select="peso"/><xsl:value-of select="peso/@unidad"/></td>
                                <td><xsl:value-of select="descripcion"/></td>
                                <td>
                                    <ul>
                                        <xsl:for-each select="ciudades">
                                            <xsl:sort select="ciudad/@paquetes" order="descending"></xsl:sort>
                                            <li><xsl:value-of select="ciudad"/> (<xsl:value-of select="ciudad/@paquetes"/>)</li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                            </tr>
                        </xsl:when>
                        <xsl:when test="peso &gt;= 5">
                            <tr class="naranja">
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda = 'eur'">
                                        <td><span class="euro"><xsl:value-of select="nombre"/></span></td>
                                        <td><xsl:value-of select="precio"/>euros</td>
                                    </xsl:when>
                                    <xsl:when test="precio/@moneda = 'usd'">
                                        <td><span class="dolar"><xsl:value-of select="nombre"/></span></td>    
                                        <td><xsl:value-of select="precio"/>$</td>
                                    </xsl:when>
                                </xsl:choose>
                                <td><xsl:value-of select="peso"/><xsl:value-of select="peso/@unidad"/></td>
                                <td><xsl:value-of select="descripcion"/></td>
                                <td>
                                    <ul>
                                        <xsl:for-each select="ciudades">
                                            <xsl:sort select="ciudad/@paquetes" order="descending"></xsl:sort>
                                            <li><xsl:value-of select="ciudad"/> (<xsl:value-of select="ciudad/@paquetes"/>)</li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                            </tr>
                        </xsl:when>
                        <xsl:when test="peso &lt; 5">
                            <tr class="rojo">
                                <xsl:choose>
                                    <xsl:when test="precio/@moneda = 'eur'">
                                        <td><span class="euro"><xsl:value-of select="nombre"/></span></td>
                                        <td><xsl:value-of select="precio"/>euros</td>
                                    </xsl:when>
                                    <xsl:when test="precio/@moneda = 'usd'">
                                        <td><span class="dolar"><xsl:value-of select="nombre"/></span></td>    
                                        <td><xsl:value-of select="precio"/>$</td>
                                    </xsl:when>
                                </xsl:choose>
                                <td><xsl:value-of select="peso"/><xsl:value-of select="peso/@unidad"/></td>
                                <td><xsl:value-of select="descripcion"/></td>
                                <td>
                                    <ul>
                                        <xsl:for-each select="ciudades">
                                            <xsl:sort select="ciudad/@paquetes" order="descending"></xsl:sort>
                                            <li><xsl:value-of select="ciudad"/> (<xsl:value-of select="ciudad/@paquetes"/>)</li>
                                        </xsl:for-each>
                                    </ul>
                                </td>
                            </tr>
                        </xsl:when>
                    </xsl:choose>
                </xsl:for-each>
            </table>
            <p>Direccion de la empresa: <span class="negrita"><xsl:value-of select="empresa/direccion"></xsl:value-of></span></p>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>