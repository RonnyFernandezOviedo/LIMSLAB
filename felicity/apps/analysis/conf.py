"""Analysis Configs
This file is part of Felicity LIMS Software
"""


class States:
    class Sample:
        SCHEDULED = "programado"  # scheduled for collection
        EXPECTED = "esperada"  # not yet received in the laboratory
        RECEIVED = "recibido"  # received in the laboratory and ready for processing
        AWAITING = "Esperando"  # pending approval
        APPROVED = "aprobada"  # authorised for release
        PUBLISHING = "publicando"  # printed samples, ready for dispatch
        PUBLISHED = "publicado"  # printed samples, ready for dispatch
        INVALIDATED = "invalidated"  # approval condemnation
        CANCELLED = "cancelada"  # no longer required <in other words deleted>
        REJECTED = "rechazada"  # declined for non conformance reasons
        STORED = "stored"  # samples in storage
        REFERRED = "referred"  # sample with all analyses refered
        PAIRED = "paired"  # samples with some (not all) analysis referred

    class Result:
        PENDING = "pendiente"  # analytes that are pending results
        SUBMITTING = "cargando"
        RESULTED = "resultado"  # analytes that have results but not approved yet. 'to_be_verified' / 'un-authorised'
        RETRACTED = "retracted"  # analytes with erroneous results for correction
        CANCELLED = (
            "cancelada"  # analytes that are no longer required <in other words deleted>
        )
        APPROVING = "aprobando"
        APPROVED = "aprobada"  # analytes that are authorised/approved
        REFERRED = "referred"  # analytes that are refered

    def __init__(self):
        self.sample = self.Sample()
        self.result = self.Result()


states = States()


class Priorities(object):
    class Sample:
        NORMAL = 0
        MEDIUM = 1
        HIGH = 2

    def __init__(self):
        self.sample = self.Sample()


priorities = Priorities()
