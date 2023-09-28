#Pull the latest base image from Dockerhub

FROM osixia/openldap

# Set the environment variables

ENV LDAP_ORGANISATION="Your Company Name" LDAP_DOMAIN="your.company.com" LDAP_BASE_DN="dc=your,dc=company,dc=com"
RUN mkdir /slapd && chmod -R 777 /slapd
COPY bootstrap.ldif /container/service/slapd/assets/config/bootstrap/ldif/50-bootstrap.ldif
USER 12345