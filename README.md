businesslink assets
===================

This repository contains archived assets from businesslink.gov.uk. 

These are not deployed directly from git, but instead taken from the copy 
stored on S3. If changes are made, they can be synchronised with S3 like so:

    s3cmd -c s3cmd.conf sync assets/ s3://transition-assets/bl/
    s3cmd -c s3cmd.conf sync improve_assets/ s3://transition-assets/improve/

The s3 credentials are not stored in Github. Speak to a member of
ops or the Transition team to obtain them.
