#!/bin/bash
kubectl patch --namespace application-ee395aff-d90c-ea4e-b24c-5f3d09e427d2 deployment myapp-dev-portal -p '{"spec": { "template": {"metadata": { "labels": { "date": "'`date +'%s'`'" } }}}}'
