# Generated by Django 3.1.4 on 2021-04-21 16:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0082_entity_numberofauditedyears'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entity',
            old_name='NumberOfAuditedYears',
            new_name='NumberOfYearsAudited',
        ),
    ]
