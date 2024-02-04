##
## bundle the html files into an httpd image
##

FROM httpd

MAINTAINER Software Shinobi "troy@softwareshinobi.digital"

USER root

ENV contentRoot /usr/local/apache2/htdocs/

COPY --chown=www-data . $contentRoot
